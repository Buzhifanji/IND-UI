import type { LitElement } from "lit";

interface WatchOptions {
  isAfterFirstUpdate: boolean; //
}

type UpdateFn = (oldValue?: unknown, newValue?: unknown) => void;

type NonUndefined<A> = A extends undefined ? never : A;

/**
 *  -? 移除了可选属性中的 ?，使得属性从可选变为必选的
 */
type UpdateFnKes<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends UpdateFn ? K : never;
}[keyof T];

/**
 *
 * @param propName 监听属性名
 * @param options isAfterFirstUpdate 是否等待 renderRoot 第一次更新完之后 执行监听
 * @returns
 */
export function watch(propName: string, options?: WatchOptions) {
  return <T extends LitElement>(
    proto: T,
    decoratedFn: UpdateFnKes<T>
  ): void => {
    // @ts-expect-error -- update is a protected property
    const { update } = proto;
    if (propName in proto) {
      const key = propName as keyof T;
      // @ts-expect-error -- update is a protected property
      proto.update = function (
        this: T,
        changedProps: Map<keyof T, T[keyof T]>
      ) {
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!options?.isAfterFirstUpdate || this.hasUpdated) {
              (this[decoratedFn] as unknown as UpdateFn)(oldValue, newValue);
            }
          }
        }

        update.call(this, changedProps);
      };
    }
  };
}
