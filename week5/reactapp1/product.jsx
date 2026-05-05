function Product(props){
    //console.log(props)
    const{productObj} =props;
    return(
        <div className="shadow-2xl p-2.5">
        <h1 className="text-2xl text-pink-300">{productObj.title}</h1>
        <p className="font-bold">{productObj.price}</p>
        <p className="font-medium">{productObj.description}</p>
        </div>
    );
};
export default Product;