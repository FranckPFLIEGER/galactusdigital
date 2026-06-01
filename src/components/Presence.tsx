import { useIntersection } from '../hooks/useIntersection'
import { useEffect, useRef, useCallback } from 'react'

const territories = [
  { name: 'France Hexagonale', code: 'FR',  desc: 'Siège administratif',        lon:   2.2137, lat:  46.2276 },
  { name: 'Martinique',        code: 'MQ',  desc: 'Siège régional Caraïbes',    lon: -61.0240, lat:  14.6410 },
  { name: 'Guadeloupe',        code: 'GP',  desc: 'Présence active',             lon: -61.5510, lat:  16.2650 },
  { name: 'Guyane',            code: 'GF',  desc: 'Présence active',             lon: -53.1258, lat:   3.9339 },
  { name: 'Saint-Martin',      code: 'SXM', desc: 'Présence active',             lon: -63.0523, lat:  18.0708 },
  { name: 'Saint-Barthélemy',  code: 'BL',  desc: 'Présence active',             lon: -62.8333, lat:  17.9000 },
  { name: 'Réunion',           code: 'RE',  desc: 'Présence active',             lon:  55.5364, lat: -21.1151 },
]

const W = 960
const H = 480
const SCALE = 153
const CX = W / 2
const CY = H / 2 + 20

function mercator(lon: number, lat: number): [number, number] {
  const x = CX + SCALE * (lon * Math.PI / 180)
  const latR = Math.max(Math.min(lat * Math.PI / 180, 1.484), -1.484)
  const y = CY - SCALE * Math.log(Math.tan(Math.PI / 4 + latR / 2))
  return [x, y]
}

function MapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = useCallback((geoData: any) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#111110'
    ctx.fillRect(0, 0, W, H)

    const lats = [-60, -30, 0, 30, 60]
    lats.forEach(lat => {
      const [, y] = mercator(0, lat)
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(W, y)
      ctx.strokeStyle = lat === 0 ? 'rgba(228,31,38,0.20)' : 'rgba(255,255,255,0.05)'
      ctx.lineWidth = lat === 0 ? 1 : 0.5
      ctx.setLineDash(lat === 0 ? [6, 8] : [2, 10])
      ctx.stroke()
      ctx.setLineDash([])
    })

    const lons = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150]
    lons.forEach(lon => {
      const [x] = mercator(lon, 0)
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, H)
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 0.5
      ctx.stroke()
    })

    const features = geoData.features || []
    features.forEach((feature: any) => {
      const geom = feature.geometry
      if (!geom) return
      ctx.fillStyle = 'rgba(255,255,255,0.13)'
      ctx.strokeStyle = 'rgba(255,255,255,0.28)'
      ctx.lineWidth = 0.5
      const drawPolygon = (coords: number[][][]) => {
        coords.forEach(ring => {
          ctx.beginPath()
          ring.forEach(([lon, lat], i) => {
            const [x, y] = mercator(lon, lat)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          })
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
        })
      }
      if (geom.type === 'Polygon') drawPolygon(geom.coordinates)
      else if (geom.type === 'MultiPolygon') {
        geom.coordinates.forEach((poly: number[][][]) => drawPolygon(poly))
      }
    })

    territories.forEach(t => {
      const [x, y] = mercator(t.lon, t.lat)
      ctx.beginPath()
      ctx.arc(x, y, 12, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(228,31,38,0.15)'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, 7, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(228,31,38,0.38)'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, 4.5, 0, Math.PI * 2)
      ctx.fillStyle = '#E41F26'
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x, y, 1.8, 0, Math.PI * 2)
      ctx.fillStyle = 'white'
      ctx.fill()
    })
  }, [])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson')
      .then(r => r.json())
      .then(data => draw(data))
      .catch(() => draw({ features: [] }))
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  )
}

export function Presence() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="presence-section" id="presence" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Notre Présence
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Une couverture unique —<br />Caraïbes, Océan Indien et France
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Seul organisme de formation certifiante IT présent à la fois
          dans les territoires ultramarins et en France hexagonale,
          capable de déployer des formations officielles sur 6 territoires ultramarins et en France hexagonale.
        </p>

        <div className="presence-grid">
          {territories.map((t, i) => (
            <div key={t.name}
              className={`presence-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.06 * i + 0.2}s` }}>
              <div className="presence-code">{t.code}</div>
              <div className="presence-name">{t.name}</div>
              <div className="presence-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className={`presence-map reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="presence-map-header">
            <div className="presence-map-label">Zone d'intervention — Caraïbes · Océan Indien · France</div>
          </div>
          <div className="presence-map-svg-wrapper">
            <MapCanvas />
          </div>
          <div className="presence-map-stats">
            <div className="presence-stat">
              <span className="presence-stat-num">7</span>
              <span className="presence-stat-label">territoires</span>
            </div>
            <div className="presence-stat-divider" />
            <div className="presence-stat">
              <span className="presence-stat-num">3</span>
              <span className="presence-stat-label">zones géographiques</span>
            </div>
            <div className="presence-stat-divider" />
            <div className="presence-stat">
              <span className="presence-stat-num">2</span>
              <span className="presence-stat-label">océans</span>
            </div>
          </div>
          <p className="presence-map-quote">
            "Présents là où les autres ne vont pas,
            pour ceux qui méritent les mêmes opportunités."
          </p>
        </div>
      </div>
    </section>
  )
}
