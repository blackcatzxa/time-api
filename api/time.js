export default async function handler(req, res) {
  try {
    const r = await fetch("https://script.google.com/macros/s/AKfycbzZDlFL2HlVyz6fIpD8jB6z9dq1kc1Nc8ZB2a-kKcOzWH99umc7rmYMyPJgmk32HiKO/exec", {
      headers: { "Cache-Control": "no-cache" }
    });
    const data = await r.json(); // 期待得到 { time: "YYYY-MM-DDTHH:mm:ss+08:00" }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "抓取失敗", detail: String(err) });
  }
}
