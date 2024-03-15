import User from '../schema/user-schema.js';


// Save data
export const addUser = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


// show all data
export const getUsers = async (request, response) => {
    try{
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}

// fill data for edit
export const getUser = async (request, response) => {
    try{
        const users = await User.find({_id: request.params.id});
        response.status(200).json(users);
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}