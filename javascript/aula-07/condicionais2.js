// Muito util quando sua variavel possui valores especificos

const permissoes = 'admin' // 'alunos' || "professor" || "admin"

switch (permissoes) {
    case "aluno":
        console.log("Voce só pode visualizar as aulas.");
        break;
    case "professor":
        console.log("Voce pode adicionar e modificar aulas e exerciocios ");
        break;
    case "admin":
        console.log("Voce tem acesso total ao sistema! ");
        break;
    default:
        console.log("Voce não é reconhecido pelo sistema! ");
}