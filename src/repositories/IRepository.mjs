class IRepository{
    obtenerPorId(id){
        throw new Error('Metodo obtenerPorID() no implementado');
    }

    obtenerTodos(){
        throw new Error('Metodo obtenerTodos() no implementado');
    }

    buscarPorDisciplina(disciplina){
        throw new Error('buscarPorDisciplina() no implementado');
    }

    insertarAtleta(nuevoAtleta){
        throw new Error ('Metodo insertarAtleta() no implementado')
    }

    eliminarAtleta(id){
        throw new Error ('Metodo eliminarAtleta() no implementado')
    }

    actualizarAtleta(id, atletaActualizado){
        throw new Error ('Metodo actualizarAtleta() no implementado')
    }

}

export default IRepository;
//este archivo establece los metodos que deben implementar los modelos que se definen