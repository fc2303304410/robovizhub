// 声明 SCSS 模块，让 TypeScript 识别
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// 可选：同时声明其他样式文件类型（如 less、css）
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}