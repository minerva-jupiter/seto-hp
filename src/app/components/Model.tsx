// Model.tsx
import { FC, useState, useEffect } from "react"
import { Html} from "@react-three/drei"
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { VRMLoaderPlugin } from "@pixiv/three-vrm"
import { VRMAnimationLoaderPlugin } from "@pixiv/three-vrm-animation"



const Model: FC = () => {
  const [gltf, setGltf] = useState<GLTF>()
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    if (!gltf) {
      const loader = new GLTFLoader()
      loader.register((parser) => {
        return new VRMLoaderPlugin(parser)
      });
      loader.register((parser) => {
        return new VRMAnimationLoaderPlugin(parser)
      });

      loader.load(
        "/models/Setok.vrm",
        (tmpGltf) => {
          setGltf(tmpGltf)
          console.log("loaded")
        },
        // called as loading progresses
        (xhr) => {
          setProgress((xhr.loaded / xhr.total) * 100)
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
        },
        // called when loading has errors
        (error) => {
          console.log("An error happened")
          console.log(error)
        }
      )
      let currentVrm: any = undefined;
      let currentVrmAnimation: any = undefined;
      let currentMixer:any = undefined;
      function load(url: string) {
        loader.load(
            url,
            // ロード時に呼ばれる
            (gltf) => {
                tryInitVRM(gltf);
                tryInitVRMA(gltf);
            },
            // プログレス時に呼ばれる
            (progress) => console.log( 
              "Loading model...", 
              100.0 * (progress.loaded / progress.total), "%" 
            ),
            // エラー時に呼ばれる
            (error) => console.error(error)
        );
      }
      function tryInitVRM(gltf: any) {
        const vrm = gltf.userData.vrm;
        if ( vrm == null ) {
            return;
        }
        currentVrm = vrm;
        scene.add(vrm.scene);
        initAnimationClip();
      }

      // VRMAの読み込み
      function tryInitVRMA(gltf: any) {
        const vrmAnimations = gltf.userData.vrmAnimations;
        if (vrmAnimations == null) {
            return;
        }
        currentVrmAnimation = vrmAnimations[0] ?? null;
        initAnimationClip();
      }
      function initAnimationClip() {
        if (currentVrm && currentVrmAnimation) {
            currentMixer = new THREE.AnimationMixer(currentVrm.scene);
            const clip = createVRMAnimationClip(currentVrmAnimation, currentVrm);
            currentMixer.clipAction(clip).play();
        }
      }
      // https://note.com/npaka/n/nf632f283f89a
      load("/animations/VRMA_01.vrma")
    }
  }, [gltf])

  return (
    <>
      {gltf ? (
        <primitive object={gltf.scene} />
      ) : (
        <Html center>{progress} % loaded</Html>
      )}
    </>
  )
}

export default Model