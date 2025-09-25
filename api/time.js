export default async function handler(req, res) {
  try {
    const r = await fetch("https://script.google.com/macros/s/AKfycbxUwAQ5a3z0ey1sglAum5C-FedWoVSItIex8BdEFNaFYLbPnYngSvaghMiW8h0ZrfY9/exec", {
      headers: { "Cache-Control": "no-cache" }
    });
    const data = await r.json(); // 期待得到 { time: "YYYY-MM-DDTHH:mm:ss+08:00" }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "抓取失敗", detail: String(err) });
  }
}
