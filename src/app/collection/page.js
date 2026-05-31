'use client'

import { useState } from 'react'

export default function Page({ searchParams }) {
  const id = searchParams.id
  const [got, setGot] = useState(false)

  const handleGet = () => {
    if (id) {
      localStorage.setItem(id, 'true')
      setGot(true)
    }
  }

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>UMA Brewery</h1>

      <img src="/label.png" style={{ width: 200 }} />

      <p>ID: {id}</p>

      {!got ? (
        <button onClick={handleGet}>
          GETする
        </button>
      ) : (
        <div>
          <h2 style={{ color: 'gold' }}>GET!</h2>
          <p>コレクションに追加されました</p>
        </div>
      )}

      <br /><br />

      <a href="/collection">
        コレクションを見る
      </a>
    </div>
  )
}