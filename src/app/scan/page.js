'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const params = useSearchParams()
  const id = params.get('id')
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

      {/* ラベル画像 */}
      <img src="/label.png" style={{ width: '200px' }} />

      <p>ID: {id}</p>

      {!got ? (
        <button onClick={handleGet}>
          GETする
        </button>
      ) : (
        <div>
          <h2 style={{ color: 'gold' , fontSize: 28 }}>GET!</h2>
          <p style={{ color: '#0f0' }}>コレクションに追加されました</p>
        </div>
      )}

	<a href="/collection" style={{ display: 'block', marginTop: 20 }}>
  コレクションを見る
	</a>
          

    </div>
  )
}
``