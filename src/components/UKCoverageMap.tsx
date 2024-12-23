import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const UKCoverageMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    // Note: Replace with your Mapbox token
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-1.5491, 52.9225], // Centered on middle England
      zoom: 5.5,
      interactive: false // Disable interaction for presentation
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add coverage circle
      map.current.addSource('coverage-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-1.5491, 52.9225], // Middle England coordinates
          },
          properties: {},
        },
      });

      // Animated circle effect
      map.current.addLayer({
        id: 'coverage-area-fill',
        type: 'circle',
        source: 'coverage-area',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            5, 100,
            8, 300,
          ],
          'circle-color': '#34D399',
          'circle-opacity': 0.15,
        },
      });

      // Pulsing effect
      map.current.addLayer({
        id: 'coverage-area-pulse',
        type: 'circle',
        source: 'coverage-area',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            5, 100,
            8, 300,
          ],
          'circle-color': '#34D399',
          'circle-opacity': [
            'interpolate',
            ['linear'],
            ['get', 'pulse'],
            0, 0.3,
            1, 0,
          ],
          'circle-opacity-transition': {
            duration: 1000,
            delay: 0
          },
        },
      });

      // Animate the pulse
      let start = 0;
      function animatePulse(timestamp: number) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / 1000;
        
        map.current?.setPaintProperty(
          'coverage-area-pulse',
          'circle-opacity',
          Math.abs(Math.sin(progress))
        );
        
        requestAnimationFrame(animatePulse);
      }
      
      requestAnimationFrame(animatePulse);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default UKCoverageMap;