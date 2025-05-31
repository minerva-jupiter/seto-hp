'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Avatar() {
    const gltfCanvasRef = React.useRef<HTMLDivElement>(null)
    return (
        <div
            ref={gltfCanvasRef}
            style={{height:1000}}
        >
            <Canvas
                frameloop="demand"
                camera={{ fov:20,near:0.1,far:300,position:[0,1,-10]}}
                flat
            >
                <directionalLight position={[1,1,-1]} color={"0xffffff"} />
                <Model />
                <color attach="background" args={["#000000"]} />
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    enableDamping={false}
                />
                <gridHelper/>
            </Canvas>
        </div>
    )
}