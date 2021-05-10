module.exports = (sequelize, DataTypes) =>{
    const Tasks = sequelize.define("Tasks",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          status: DataTypes.BOOLEAN,
          descricao:DataTypes.STRING, 
          email: {
              type: DataTypes.STRING,
            },
         responsavel:DataTypes.STRING,        
         alteracoes: DataTypes.INTEGER,       
    
    },{
        tableName:'tasks',  
        timestamps:false    
    });
    return Tasks

}
