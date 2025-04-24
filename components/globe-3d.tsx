"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 200

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Globe geometry
    const globeGeometry = new THREE.SphereGeometry(80, 64, 64)
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x3a3af4,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(82, 64, 64)
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x8080ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(200, 100, 100)
    scene.add(pointLight)

    // Event locations
    const eventLocations = [
      { lat: 43.6532, lng: -79.3832, name: "Toronto" }, // Toronto
      { lat: 49.2827, lng: -123.1207, name: "Vancouver" }, // Vancouver
      { lat: 51.5074, lng: -0.1278, name: "London" }, // London
      { lat: 40.7128, lng: -74.006, name: "New York" }, // New York
      { lat: 37.7749, lng: -122.4194, name: "San Francisco" }, // San Francisco
      { lat: 35.6762, lng: 139.6503, name: "Tokyo" }, // Tokyo
      { lat: 28.6139, lng: 77.209, name: "New Delhi" }, // New Delhi
      { lat: -33.8688, lng: 151.2093, name: "Sydney" }, // Sydney
    ]

    // Add event markers
    eventLocations.forEach((location) => {
      const { x, y, z } = latLngToVector3(location.lat, location.lng, 82)

      // Marker
      const markerGeometry = new THREE.SphereGeometry(1.5, 16, 16)
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff3366 })
      const marker = new THREE.Mesh(markerGeometry, markerMaterial)
      marker.position.set(x, y, z)
      scene.add(marker)

      // Pulse effect
      const pulseGeometry = new THREE.SphereGeometry(1, 16, 16)
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0xff3366,
        transparent: true,
        opacity: 0.4,
      })
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
      pulse.position.set(x, y, z)
      pulse.userData = { initialScale: 1, growFactor: Math.random() * 0.1 + 0.05 }
      scene.add(pulse)
    })

    // Convert latitude and longitude to 3D coordinates
    function latLngToVector3(lat: number, lng: number, radius: number) {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      const x = -radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)

      return { x, y, z }
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100
      mouseY = (event.clientY - windowHalfY) / 100
    }

    document.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation following mouse
      targetRotationX += (mouseY - targetRotationX) * 0.05
      targetRotationY += (mouseX - targetRotationY) * 0.05

      globe.rotation.x = targetRotationX * 0.3
      globe.rotation.y = targetRotationY * 0.3
      atmosphere.rotation.x = targetRotationX * 0.3
      atmosphere.rotation.y = targetRotationY * 0.3

      // Pulse animation for markers
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.userData && child.userData.initialScale) {
          const scale = child.userData.initialScale + Math.sin(Date.now() * 0.003) * child.userData.growFactor
          child.scale.set(scale, scale, scale)
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}
