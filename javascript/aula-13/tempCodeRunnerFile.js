console.log("antes da criação da promise");

const promessa = new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro){
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
});
console.log(promessa);