# Exception Introduction

How to reproduce:

```
cd packages/pkg1
npx tsc
```

You will see an error:

```
index.tsx:4:11 - error TS2786: 'Button' cannot be used as a JSX component.
  Its type 'CompoundedComponent' is not a valid JSX element type.
    Type 'CompoundedComponent' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
      Type 'import("/Users/root/playground-pnpm-workspace/node_modules/.pnpm/@types+react@19.0.10/node_modules/@types/react/index").ReactNode' is not assignable to type 'React.ReactNode'.
        Type 'bigint' is not assignable to type 'ReactNode'.

4   return <Button>123</Button>;
            ~~~~~~


Found 1 error in index.tsx:4
```

How to solve the exception:

```
cd apps/app1
pnpm uninstall @types/react
```

Then execute `npx tsc` again in the `packages/pkg1` directory, and it will not report an error.
