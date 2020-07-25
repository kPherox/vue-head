import Vue, { PluginObject } from 'vue';
declare const VueHead: PluginObject<{}>;
export = VueHead;
interface TitleOptions {
  inner?: string;
  separator?: string;
  complement?: string;
}
interface ElementOptions extends Object {
  /**
   * Option for undo tag when leave the component
   * https://github.com/ktquez/vue-head#undo-elements
   */
  undo?: boolean;
  /**
   * Id for element updating
   * https://github.com/ktquez/vue-head#replace-content-the-elements
   */
  id?: string;
  /**
   * Insert element in body
   */
  body?: boolean;
}
interface MetaOptions extends ElementOptions {
  /** Shorthand of `charset` */
  ch?: string;
  charset?: string;
  /** Shorthand of `name` */
  n?: string;
  name?: string;
  /** Shorthand of `http-equiv` */
  he?: string;
  'http-equiv'?: string;
  /** Shorthand of `itemprop` */
  ip?: string;
  itemprop?: string;
  /** Shorthand of `content` */
  c?: string;
  content?: string;
  /** Shorthand of `property` */
  p?: string;
  property?: string;
}
interface BaseOptions extends ElementOptions {
  /** Shorthand of `target` */
  tg?: string;
  target?: string;
}
interface LinkOptions extends ElementOptions {
  /** Shorthand of `rel` */
  r?: string;
  rel?: string;
  /** Shorthand of `href` */
  h?: string;
  href?: string;
  /** Shorthand of `sizes` */
  sz?: string;
  sizes?: string;
  /** Shorthand of `type` */
  t?: string;
  type?: string;
}
interface ScriptOptions extends ElementOptions {
  /** Shorthand of `type` */
  t?: string;
  type?: string;
  /** Shorthand of `scheme` */
  sc?: string;
  scheme?: string;
  /** Shorthand of `src` */
  s?: string;
  src?: string;
  /** Shorthand of `async` */
  a?: boolean;
  async?: boolean;
  /** Shorthand of `defer` */
  d?: string;
  defer?: string;
  /** Shorthand of `inner` */
  i?: string;
  inner?: string;
}
interface StyleOptions extends ElementOptions {
  /** Shorthand of `type` */
  t?: string;
  type?: string;
  /** Shorthand of `inner` */
  i?: string;
  inner?: string;
}
interface NoScriptOptions extends ElementOptions {
  /** Shorthand of `inner` */
  i?: string;
  inner?: string;
  /** Accepted elements for <noscript> in <head> */
  meta?: MetaOptions[] | (() => MetaOptions[]);
  link?: LinkOptions[] | (() => LinkOptions[]);
  style?: StyleOptions[] | (() => StyleOptions[]);
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: {
      title?: TitleOptions | (() => TitleOptions);
      meta?: MetaOptions[] | (() => MetaOptions[]);
      base?: BaseOptions[] | (() => BaseOptions[]);
      link?: LinkOptions[] | (() => LinkOptions[]);
      script?: ScriptOptions[] | (() => ScriptOptions[]);
      style?: StyleOptions[] | (() => StyleOptions[]);
      noscript?: NoScriptOptions | (() => NoScriptOptions);
    };
  }
}
