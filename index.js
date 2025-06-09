const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const memos = [];

app.use(cors());    // CORS 허용
app.use(express.json());
app.use(bodyParser.json());

app.get('/api/memos', (req, res) => {   // 내용 출력
    res.send(memos)
});

app.post('/api/memos', (req, res) => {  // 내용 입력
    memos.push(req.body.content);
    res.send(memos)
});

app.put('/api/memos/:idx', (req, res) => {  // 내용 수정
    memos[req.params.idx] = req.body.content;
    res.send(memos)
});

app.delete('/api/memos/:idx', (req, res) => {
    const idx = parseInt(req.params.idx)
    memos.splice(idx, 1);    // ✅ 해당 인덱스 요소 삭제
    res.send(memos) // 변경된 목록 반환
});

app.listen(port, () => {    // 주소 포트
    console.log(`Example app listening on port ${port}`)
});