"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[721],{9721:e=>{e.exports=JSON.parse('{"toString":{"defaultValue":{},"description":"Returns a string representation of a string.","name":"toString","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":false,"type":{"name":"() => string"}},"charAt":{"defaultValue":null,"description":"Returns the character at the specified index.\\n@param pos The zero-based index of the desired character.","name":"charAt","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(pos: number) => string"}},"charCodeAt":{"defaultValue":null,"description":"Returns the Unicode value of the character at the specified location.\\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.","name":"charCodeAt","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(index: number) => number"}},"concat":{"defaultValue":null,"description":"Returns a string that contains the concatenation of two or more strings.\\n@param strings The strings to append to the end of the string.","name":"concat","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(...strings: string[]) => string"}},"indexOf":{"defaultValue":null,"description":"Returns the position of the first occurrence of a substring.\\n@param searchString The substring to search for in the string\\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.","name":"indexOf","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(searchString: string, position?: number) => number"}},"lastIndexOf":{"defaultValue":null,"description":"Returns the last occurrence of a substring in the string.\\n@param searchString The substring to search for.\\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.","name":"lastIndexOf","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(searchString: string, position?: number) => number"}},"localeCompare":{"defaultValue":null,"description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.\\n@param that String to compare to target string\\n@param that String to compare to target string\\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.","name":"localeCompare","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},"match":{"defaultValue":null,"description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string or an object that supports being matched against, and returns an array\\ncontaining the results of that search, or null if no matches are found.\\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\\n@param matcher An object that supports being matched against.","name":"match","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","name":"String"}],"required":true,"type":{"name":"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},"replace":{"defaultValue":null,"description":"Replaces text in a string, using a regular expression or search string.\\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\\nReplaces text in a string, using an object that supports replacement within a string.\\n@param searchValue A string or regular expression to search for.\\n@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.\\n@param searchValue A string to search for.\\n@param replacer A function that returns the replacement text.\\n@param searchValue An object that supports searching for and replacing matches within a string.\\n@param replaceValue The replacement text.\\n@param searchValue A object can search for and replace matches within a string.\\n@param replacer A function that returns the replacement text.","name":"replace","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","name":"String"}],"required":true,"type":{"name":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},"search":{"defaultValue":null,"description":"Finds the first substring match in a regular expression search.\\n@param regexp The regular expression pattern and applicable flags.\\n@param searcher An object which supports searching within a string.","name":"search","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","name":"String"}],"required":true,"type":{"name":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},"slice":{"defaultValue":null,"description":"Returns a section of a string.\\n@param start The index to the beginning of the specified portion of stringObj.\\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\\nIf this value is not specified, the substring continues to the end of stringObj.","name":"slice","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(start?: number, end?: number) => string"}},"split":{"defaultValue":null,"description":"Split a string into substrings using the specified separator and return them as an array.\\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\\n@param limit A value used to limit the number of elements returned in the array.\\n@param splitter An object that can split a string.\\n@param limit A value used to limit the number of elements returned in the array.","name":"split","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","name":"String"}],"required":true,"type":{"name":"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},"substring":{"defaultValue":null,"description":"Returns the substring at the specified location within a String object.\\n@param start The zero-based index number indicating the beginning of the substring.\\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\\nIf end is omitted, the characters from start through the end of the original string are returned.","name":"substring","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(start: number, end?: number) => string"}},"toLowerCase":{"defaultValue":null,"description":"Converts all the alphabetic characters in a string to lowercase.","name":"toLowerCase","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"toLocaleLowerCase":{"defaultValue":null,"description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","name":"toLocaleLowerCase","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(locales?: string | string[]) => string"}},"toUpperCase":{"defaultValue":null,"description":"Converts all the alphabetic characters in a string to uppercase.","name":"toUpperCase","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"toLocaleUpperCase":{"defaultValue":null,"description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","name":"toLocaleUpperCase","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(locales?: string | string[]) => string"}},"trim":{"defaultValue":null,"description":"Removes the leading and trailing white space and line terminator characters from a string.","name":"trim","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"length":{"defaultValue":null,"description":"Returns the length of a String object.","name":"length","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"number"}},"substr":{"defaultValue":null,"description":"Gets a substring beginning at the specified location and having the specified length.\\n@deprecated A legacy feature for browser compatibility\\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\\n@param length The number of characters to include in the returned substring.","name":"substr","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":true,"type":{"name":"(from: number, length?: number) => string"}},"valueOf":{"defaultValue":{},"description":"Returns the primitive value of the specified object.","name":"valueOf","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts","name":"String"}],"required":false,"type":{"name":"() => string"}},"codePointAt":{"defaultValue":null,"description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","name":"codePointAt","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(pos: number) => number"}},"includes":{"defaultValue":null,"description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.\\n@param searchString search string\\n@param position If position is undefined, 0 is assumed, so as to search all of the String.","name":"includes","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(searchString: string, position?: number) => boolean"}},"endsWith":{"defaultValue":null,"description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition \u2013 length(this). Otherwise returns false.","name":"endsWith","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(searchString: string, endPosition?: number) => boolean"}},"normalize":{"defaultValue":null,"description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\\n@param form Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"\\n@param form Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"","name":"normalize","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string): string; }"}},"repeat":{"defaultValue":null,"description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.\\n@param count number of copies to append","name":"repeat","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(count: number) => string"}},"startsWith":{"defaultValue":null,"description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","name":"startsWith","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(searchString: string, position?: number) => boolean"}},"anchor":{"defaultValue":null,"description":"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\\n@deprecated A legacy feature for browser compatibility\\n@param name","name":"anchor","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(name: string) => string"}},"big":{"defaultValue":null,"description":"Returns a `<big>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"big","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"blink":{"defaultValue":null,"description":"Returns a `<blink>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"blink","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"bold":{"defaultValue":null,"description":"Returns a `<b>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"bold","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"fixed":{"defaultValue":null,"description":"Returns a `<tt>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"fixed","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"fontcolor":{"defaultValue":null,"description":"Returns a `<font>` HTML element and sets the color attribute value\\n@deprecated A legacy feature for browser compatibility","name":"fontcolor","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(color: string) => string"}},"fontsize":{"defaultValue":null,"description":"Returns a `<font>` HTML element and sets the size attribute value\\n@deprecated A legacy feature for browser compatibility\\n@deprecated A legacy feature for browser compatibility","name":"fontsize","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"{ (size: number): string; (size: string): string; }"}},"italics":{"defaultValue":null,"description":"Returns an `<i>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"italics","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"link":{"defaultValue":null,"description":"Returns an `<a>` HTML element and sets the href attribute value\\n@deprecated A legacy feature for browser compatibility","name":"link","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"(url: string) => string"}},"small":{"defaultValue":null,"description":"Returns a `<small>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"small","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"strike":{"defaultValue":null,"description":"Returns a `<strike>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"strike","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"sub":{"defaultValue":null,"description":"Returns a `<sub>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"sub","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"sup":{"defaultValue":null,"description":"Returns a `<sup>` HTML element\\n@deprecated A legacy feature for browser compatibility","name":"sup","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"padStart":{"defaultValue":null,"description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the start (left) of the current string.\\n@param maxLength The length of the resulting string once the current string has been padded.\\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\\n@param fillString The string to pad the current string with.\\nIf this string is too long, it will be truncated and the left-most part will be applied.\\nThe default value for this parameter is \\" \\" (U+0020).","name":"padStart","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2017.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2017.string.d.ts","name":"String"}],"required":true,"type":{"name":"(maxLength: number, fillString?: string) => string"}},"padEnd":{"defaultValue":null,"description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the end (right) of the current string.\\n@param maxLength The length of the resulting string once the current string has been padded.\\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\\n@param fillString The string to pad the current string with.\\nIf this string is too long, it will be truncated and the left-most part will be applied.\\nThe default value for this parameter is \\" \\" (U+0020).","name":"padEnd","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2017.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2017.string.d.ts","name":"String"}],"required":true,"type":{"name":"(maxLength: number, fillString?: string) => string"}},"trimEnd":{"defaultValue":null,"description":"Removes the trailing white space and line terminator characters from a string.","name":"trimEnd","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"trimStart":{"defaultValue":null,"description":"Removes the leading white space and line terminator characters from a string.","name":"trimStart","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"trimLeft":{"defaultValue":null,"description":"Removes the leading white space and line terminator characters from a string.\\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead","name":"trimLeft","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"trimRight":{"defaultValue":null,"description":"Removes the trailing white space and line terminator characters from a string.\\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead","name":"trimRight","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2019.string.d.ts","name":"String"}],"required":true,"type":{"name":"() => string"}},"matchAll":{"defaultValue":null,"description":"Matches a string with a regular expression, and returns an iterable of matches\\ncontaining the results of that search.\\n@param regexp A variable name or string literal containing the regular expression pattern and flags.","name":"matchAll","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2020.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2020.string.d.ts","name":"String"}],"required":true,"type":{"name":"(regexp: RegExp) => IterableIterator<RegExpMatchArray>"}},"replaceAll":{"defaultValue":null,"description":"Replace all instances of a substring in a string, using a regular expression or search string.\\n@param searchValue A string to search for.\\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\\n@param searchValue A string to search for.\\n@param replacer A function that returns the replacement text.","name":"replaceAll","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2021.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2021.string.d.ts","name":"String"},{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2021.string.d.ts","name":"String"}],"required":true,"type":{"name":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},"at":{"defaultValue":null,"description":"Returns a new String consisting of the single UTF-16 code unit located at the specified index.\\n@param index The zero-based index of the desired code unit. A negative index will count back from the last item.","name":"at","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2022.string.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2022.string.d.ts","name":"String"}],"required":true,"type":{"name":"(index: number) => string"}},"__@iterator@123":{"defaultValue":null,"description":"Iterator","name":"__@iterator@123","parent":{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts","name":"String"},"declarations":[{"fileName":"docs/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts","name":"String"}],"required":true,"type":{"name":"() => IterableIterator<string>"}}}')}}]);