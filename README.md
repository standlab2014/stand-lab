# Hanna Cho Lab — 웹사이트

정적 웹사이트(HTML/CSS/JS)입니다. 설치할 프로그램이 없고, GitHub Pages로 **무료** 배포됩니다.

## 폴더 구조

```
hanna-cho-lab/
├── index.html              ← 모든 글/내용이 여기 있음
├── assets/
│   ├── css/style.css       ← 색·글꼴·간격 (맨 위 :root 만 바꿔도 분위기 확 바뀜)
│   ├── js/main.js          ← 메뉴, 애니메이션, 논문 필터
│   └── img/                ← 사진 넣는 곳
└── .nojekyll               ← GitHub Pages가 파일을 그대로 쓰게 하는 설정
```

## 로컬에서 보기

`index.html` 파일을 더블클릭하면 브라우저에서 바로 열립니다. 끝.

## GitHub에 올리기 (처음 한 번)

1. github.com → 우측 상단 **+** → **New repository**
2. 이름: `hanna-cho-lab` / **Public** / 나머지 체크 없이 **Create repository**
3. 터미널에서:

```bash
cd /Users/yujinlee/CODE/hanna-cho-lab
git add .
git commit -m "첫 커밋: 랩 웹사이트"
git branch -M main
git remote add origin https://github.com/<내아이디>/hanna-cho-lab.git
git push -u origin main
```

## 인터넷에 공개하기 (GitHub Pages)

레포 페이지 → **Settings** → 왼쪽 **Pages** → Source: **Deploy from a branch** → Branch: **main** / **/ (root)** → Save.

1~2분 뒤 이 주소로 열립니다:
`https://<내아이디>.github.io/hanna-cho-lab/`

## 수정한 뒤 다시 올리기 (매번 이 3줄)

```bash
git add .
git commit -m "내용 수정"
git push
```

## 자주 바꾸는 곳

| 바꾸고 싶은 것 | 파일 | 위치 |
|---|---|---|
| 글, 이름, 논문 목록 | `index.html` | 해당 섹션 |
| 흑백 톤 (글자색·선 색) | `assets/css/style.css` | `:root` 의 `--text` `--muted` `--line` |
| 여백 크기 | `assets/css/style.css` | `:root` 의 `--gap-y` `--pad-x` |
| 본문 최대 폭 | `assets/css/style.css` | `:root` 의 `--measure` |
| 글꼴 | `index.html` 의 Google Fonts 줄 + `style.css` 의 `--serif-display` / `--serif-body` |
| 로고 | `index.html` 의 `<a class="logo">` (글자라서 텍스트만 고치면 됨) |

## 사진 넣는 법

1. 사진 파일을 `assets/img/` 에 넣습니다 (예: `hero.jpg`)
2. `index.html` 에서 해당 위치의 주석 처리된 `<img>` 줄을 살리고, 그 아래 `<div class="ph">…</div>` 줄을 지웁니다

컬러 사진을 넣어도 **CSS가 자동으로 흑백 처리**합니다.
