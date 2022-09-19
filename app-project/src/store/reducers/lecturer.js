
export default function Lecturer(state={
   data:[]
},action){
    switch (action.type){
        case 'LOAD_LECTURERS':
            return {
                data: action.data
            }
    }
    return state;
}