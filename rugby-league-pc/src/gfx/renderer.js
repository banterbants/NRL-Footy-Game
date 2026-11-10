// WebGL renderer plus the post-processing chain (HDR bloom, grade/vignette, filmic tone mapping).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export const QUALITY = {
  low: { ratio: 1, shadow: 0, bloom: false, samples: 0, crowd: 0.3 },
  medium: { ratio: 1.25, shadow: 1024, bloom: false, samples: 2, crowd: 0.55 },
  high: { ratio: 1.5, shadow: 2048, bloom: true, samples: 4, crowd: 0.8 },
  ultra: { ratio: 2, shadow: 4096, bloom: true, samples: 4, crowd: 1 },
};

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: 0.35 }, uSat: { value: 1.1 }, uTint: { value: new THREE.Vector3(1, 1, 1) }, uFlash: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; uniform vec3 uTint; uniform float uFlash; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint;
      vec2 d = (vUv - 0.5) * vec2(1.0, 0.82);
      c.rgb *= mix(1.0 - uVig, 1.0, smoothstep(0.82, 0.28, length(d)));
      c.rgb += uFlash;
      gl_FragColor = c;
    }`,
};

export function createGfx(container, scene, camera) {
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const gfx = { renderer, composer: null, bloom: null, grade: null, q: QUALITY.high, name: 'high', w: 1, h: 1 };
  gfx.build = () => {
    const { w, h, q } = gfx, pr = Math.min(window.devicePixelRatio || 1, q.ratio);
    renderer.setPixelRatio(pr); renderer.setSize(w, h, false);
    if (gfx.composer) gfx.composer.dispose();
    const rt = new THREE.WebGLRenderTarget(Math.floor(w * pr), Math.floor(h * pr), { type: THREE.HalfFloatType, samples: q.samples });
    const comp = new EffectComposer(renderer, rt);
    comp.setPixelRatio(pr); comp.setSize(w, h);
    comp.addPass(new RenderPass(scene, camera));
    const strength = gfx.bloom ? gfx.bloom.strength : 0.5;
    gfx.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), strength, 0.5, 1.08);
    gfx.bloom.enabled = q.bloom; comp.addPass(gfx.bloom);
    const old = gfx.grade;
    gfx.grade = new ShaderPass(GradeShader);
    if (old) for (const k of ['uVig', 'uSat', 'uFlash']) gfx.grade.uniforms[k].value = old.uniforms[k].value;
    comp.addPass(gfx.grade);
    comp.addPass(new OutputPass());
    gfx.composer = comp;
  };
  gfx.setQuality = name => { gfx.name = QUALITY[name] ? name : 'high'; gfx.q = QUALITY[gfx.name]; gfx.build(); };
  gfx.resize = () => {
    gfx.w = Math.max(320, container.clientWidth || window.innerWidth); gfx.h = Math.max(200, container.clientHeight || window.innerHeight);
    camera.aspect = gfx.w / gfx.h; camera.updateProjectionMatrix(); gfx.build();
  };
  gfx.render = dt => gfx.composer.render(dt);
  return gfx;
}
