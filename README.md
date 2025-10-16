# Nuxt 4 + shadcn-vue 프로젝트

Nuxt 4와 shadcn-vue를 사용한 샘플 프로젝트입니다.

## 기술 스택

- **Nuxt 4**: Vue.js 기반 프레임워크
- **shadcn-vue**: 재사용 가능한 UI 컴포넌트 라이브러리
- **Tailwind CSS v4**: 유틸리티 우선 CSS 프레임워크
- **TypeScript**: 타입 안정성을 위한 정적 타입 시스템

## 설치된 컴포넌트

- Button
- Card (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Input
- Label

## 프로젝트 구조

```
source3/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind CSS 및 테마 설정
│   ├── components/
│   │   └── ui/                   # shadcn-vue 컴포넌트
│   │       ├── button/
│   │       ├── card/
│   │       ├── input/
│   │       └── label/
│   ├── lib/
│   │   └── utils.ts              # 유틸리티 함수
│   ├── pages/
│   │   └── index.vue             # 메인 페이지
│   └── app.vue                   # 루트 컴포넌트
├── public/                       # 정적 파일
├── components.json               # shadcn-vue 설정
├── nuxt.config.ts               # Nuxt 설정
├── package.json
└── tsconfig.json
```

## 참고 자료

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

개발 서버가 `http://localhost:3000`에서 실행됩니다:

```bash
pnpm dev
```

### 프로덕션 빌드

```bash
pnpm build
```

### 프로덕션 미리보기

```bash
pnpm preview
```

## shadcn-vue 컴포넌트 추가하기

새로운 shadcn-vue 컴포넌트를 추가하려면:

```bash
npx shadcn-vue@latest add [component-name]
```

예시:
```bash
npx shadcn-vue@latest add dialog
npx shadcn-vue@latest add select
npx shadcn-vue@latest add toast
```

## 사용 방법

### 컴포넌트 사용

Nuxt의 auto-import 기능을 사용하므로 컴포넌트를 import할 필요가 없습니다.
컴포넌트 이름은 `Ui` 접두사를 사용합니다:

```vue
<template>
  <div>
    <UiButton>클릭하세요</UiButton>

    <UiCard>
      <UiCardHeader>
        <UiCardTitle>제목</UiCardTitle>
        <UiCardDescription>설명</UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        내용
      </UiCardContent>
    </UiCard>
  </div>
</template>
```

## 테마 커스터마이징

### shadcn-vue 테마 적용

[shadcn-vue 테마 생성기](https://www.shadcn-vue.com/themes.html)에서 생성한 테마를 적용하려면:

1. 테마 생성기에서 원하는 색상 선택
2. 생성된 CSS 변수를 `app/assets/css/main.css`의 `:root`와 `.dark` 섹션에 복사
3. **중요**: HSL 값을 oklch 형식으로 변환하여 사용 (Tailwind CSS v4 호환성)

현재 프로젝트는 oklch 색상 공간을 사용하여 더 넓은 색상 범위와 균일한 밝기를 제공합니다.

## 더 많은 정보

- [Nuxt 배포 문서](https://nuxt.com/docs/getting-started/deployment)
- [shadcn-vue 공식 문서](https://shadcn-vue.com)
- [Tailwind CSS 문서](https://tailwindcss.com)

---

# Nuxt 4 + shadcn-vue Project

A sample project using Nuxt 4 and shadcn-vue.

## Tech Stack

- **Nuxt 4**: Vue.js-based framework
- **shadcn-vue**: Reusable UI component library
- **Tailwind CSS v4**: Utility-first CSS framework
- **TypeScript**: Static type system for type safety

## Installed Components

- Button
- Card (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Input
- Label

## Project Structure

```
source3/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Tailwind CSS and theme configuration
│   ├── components/
│   │   └── ui/                   # shadcn-vue components
│   │       ├── button/
│   │       ├── card/
│   │       ├── input/
│   │       └── label/
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── pages/
│   │   └── index.vue             # Main page
│   └── app.vue                   # Root component
├── public/                       # Static files
├── components.json               # shadcn-vue configuration
├── nuxt.config.ts               # Nuxt configuration
├── package.json
└── tsconfig.json
```

## Reference

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Getting Started

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

The development server will run at `http://localhost:3000`:

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
```

### Production Preview

```bash
pnpm preview
```

## Adding shadcn-vue Components

To add new shadcn-vue components:

```bash
npx shadcn-vue@latest add [component-name]
```

Examples:
```bash
npx shadcn-vue@latest add dialog
npx shadcn-vue@latest add select
npx shadcn-vue@latest add toast
```

## Usage

### Using Components

Nuxt's auto-import feature eliminates the need to manually import components.
Component names use the `Ui` prefix:

```vue
<template>
  <div>
    <UiButton>Click me</UiButton>

    <UiCard>
      <UiCardHeader>
        <UiCardTitle>Title</UiCardTitle>
        <UiCardDescription>Description</UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        Content
      </UiCardContent>
    </UiCard>
  </div>
</template>
```

## Theme Customization

### Applying shadcn-vue Themes

To apply a theme generated from the [shadcn-vue theme builder](https://www.shadcn-vue.com/themes.html):

1. Select your desired colors in the theme builder
2. Copy the generated CSS variables to the `:root` and `.dark` sections in `app/assets/css/main.css`
3. **Important**: Convert HSL values to oklch format for Tailwind CSS v4 compatibility

This project uses the oklch color space for a wider color range and uniform brightness.

## More Information

- [Nuxt Deployment Documentation](https://nuxt.com/docs/getting-started/deployment)
- [shadcn-vue Official Documentation](https://shadcn-vue.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
