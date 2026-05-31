'use client'

import { useState } from 'react'

export default function Page() {
  const [got, setGot] = useState(false)

  // ✅ ここで直接取得（シンプル最強）
  const id =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('id')
      : null

  const handleGet = () => {
    if (!id) {
      alert('IDが取得できてない')
      return
    }

    localStorage.setItem(id, 'true')
    setGot(true)
  }

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>UMA Brewery</h1>

      <img src="/label-ipa.png" width="200" />

      <p>ID: {id}</p>

      {!got ? (
        <button
          onClick={handleGet}
          style={{ fontSize: 20, padding: '10px 20px' }}
        >
          GETする
        </button>
      ) : (
        <div>
          <h2 style={{ color: 'gold' }}>GET!</h2>
          <p>コレクションに追加されました</p>
        </div>
      )}

      <br /><br />

      <a href="/collection">コレクションを見る</a>
    </div>
  )
}
``