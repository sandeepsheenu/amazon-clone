export const initialState={
    basket:[],
    user:null,
};

export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price +amount,0);

export function reducer(state,action) {
    console.log(action);
    switch(action.type){

        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }

        case "ADD_to_BASKET":
            return {
                ...state,
            basket:[...state.basket,action.item]
        };            
            break;
        case "REMOVE_FROM_BASKET":

            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if (index >=0){
                newBasket.splice(index,1);
                
            }else{
                console.warn(
                    `item id (${action.id}) not in`
                )
            }
            return {...state,
                basket:newBasket}
            break;

        default:
            return state;
    } 
}
// export default reducer;

// function reducer(state, action) {
//     switch(action.type) {
//     case 'ADD_TO_BASKET':
//     // Logic for adding item to basketS
//     break;
//     case 'REMOVE_FROM_BASKET':
//     // Logic for Removing item from basket
//     break;
//     default:
//     return state;
//     }
//     }