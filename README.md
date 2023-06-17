This is `stylelint` config which:

-   sets kebab-case as the only one css selector case
-   deny import styles with extension (so use import styles without it)

### Install

```shell
npm i --save-dev github:cakkypamucm/stylelint-config-vue-kebab-no-ext
```

### Use

Add `stylelint-config-vue-kebab-no-ext-cakkypamucm` to the "extends" array in your `stylelint` config file

<pre>
{
    "extends": ["some-other-config-you-use", <b>"stylelint-config-vue-kebab-no-ext-cakkypamucm"</b>]
}
</pre>

### For synergy

Add [eslint-config-vue-kebab-no-ext-cakkypamucm](https://github.com/cakkypamucm/eslint-config-vue-kebab-no-ext) to your project
