/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */

const camelCase = require('camelcase');

camelCase('foo-bar');
//=> 'fooBar'

camelCase('foo_bar');
//=> 'fooBar'

camelCase('Foo-Bar');
//=> 'fooBar'

camelCase('розовый_пушистый_единороги');
//=> 'розовыйПушистыйЕдинороги'

camelCase('Foo-Bar', {pascalCase: true});
//=> 'FooBar'

camelCase('--foo.bar', {pascalCase: false});
//=> 'fooBar'

camelCase('foo bar');
//=> 'fooBar'

console.log(process.argv[3]);
//=> '--foo-bar'
camelCase(process.argv[3]);
//=> 'fooBar'

camelCase(['foo', 'bar']);
//=> 'fooBar'

camelCase(['__foo__', '--bar'], {pascalCase: true});
//=> 'FooBar'