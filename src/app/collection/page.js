'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [items, setItems] = useState([])

  const allItems = [
    'uma-ipa-001',
    'uma-lager-001',
    'uma-ale-001'
  ]

  const imageMap = {
    'uma-ipa-001': '/label-ipa.png',
    'uma-lager-001': '/label-lager.png',
    'uma-ale-001': '/label-ale.png'
  }

  useEffect(() => {
    const keys = Object.keys(localStorage)
    setItems(keys)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>
        コレクション {items.length} / {allItems.length}
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 15
        }}
      >
        {allItems.map((id) => {
          const owned = items.includes(id)

          return (
            <div
              key={id}
              style={{
                textAlign: 'center',
                opacity: owned ? 1 : 0.3
              }}
            >
              <img
                src={imageMap[id]}
                style={{ width: 100 }}
              />

              <p style={{ fontSize: 12 }}>{id}</p>

              {!owned && (
                <p style={{ fontSize: 10, color: 'gray' }}>
                  未取得
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}