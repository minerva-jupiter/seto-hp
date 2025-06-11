'use client';

import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import Model from './Model';

const Rig = () => {
    const { camera } = useThree();
    return useFrame(() => {
        camera.position.lerp(new THREE.Vector3(0, 2, -2), 0);
        camera.lookAt(0, 1, 0);
    });
}

export default function Avatar() {
    const gltfCanvasRef = React.useRef<HTMLDivElement>(null)
    return (
        <div
            ref={gltfCanvasRef}
            style={{height:500}}
        >
            <Canvas
                camera={{ position:[0,5,-5]}}
            >
                <PerspectiveCamera makeDefault position={[0, 2, -2]} />
                <directionalLight position={[0,10,-5]} color={"0xffffff"} />
                <Model />
                <color attach="background" args={["#ff00ff"]} />
                <gridHelper/>
                <OrbitControls 
                    enableZoom={false}
                />
                <Rig />
            </Canvas>
        </div>
    )
}