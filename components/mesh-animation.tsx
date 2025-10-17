"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function MeshAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 3

    // Create icosahedron geometry with wireframe
    const geometry = new THREE.IcosahedronGeometry(1.5, 4)
    const material = new THREE.MeshPhongMaterial({
      color: 0x5b8fd9,
      emissive: 0x2d5a99,
      wireframe: false,
      transparent: true,
      opacity: 0.3,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Add wireframe
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.5, 4)
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x5b8fd9,
      transparent: true,
      opacity: 0.6,
    })
    const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(wireframeGeometry), wireframeMaterial)
    scene.add(wireframe)

    // Add points
    const pointsGeometry = new THREE.IcosahedronGeometry(1.5, 4)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x5b8fd9,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    })
    const points = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(points)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.002
      wireframe.rotation.x += 0.001
      wireframe.rotation.y += 0.002
      points.rotation.x += 0.001
      points.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      wireframeGeometry.dispose()
      wireframeMaterial.dispose()
      pointsGeometry.dispose()
      pointsMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
