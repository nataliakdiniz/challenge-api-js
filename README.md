# Features

- [x] O Arquivo deve conter um título Countries List (centralizado, em negrito, cor #4F4F4F e tamanho da fonte 16)
- [x] O Arquivo deve conter 4 colunas: Name, Capital, Area, Currencies, sendo a segunda
linha o cabeçalho com o nome dos campos (como mostra a imagem). O título das
colunas deve ser estilizado (em negrito, cor #808080, e tamanho da fonte 12)
- [x] A partir da terceira linha, cada linha da planilha deve conter as informações do país
retornado na resposta da API.
- [x] Quando não houver nenhum valor nos campos de Capital, Area ou em Currencies, deve
mostrar um "-" (como mostrado na imagem acima).
- [x] O campo de Currencies deve ser tratado para mostrar somente os códigos da moeda
(campo code), e não o objeto JSON inteiro que vem da API. Os códigos devem vir
separados por vírgula. (como mostrado na imagem)
- [x] O campo Area deve ser formatado para ser um número, padrão americano (como
mostrado na imagem)
- [x] Resultado esperado: Rodar a aplicação, e ao final ela gerar uma planilha com o conteúdo mostrado acima na imagem.


# Language/Tools

- JavaScript/Node.js


# Getting Started

Install all dependencies:
```sh
npm install
```

Run the application:
```sh
npm run start
```


# TODO:
- Add unit test