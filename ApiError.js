class ApiError extends Error{
    constructor(massage , statusCode){
        super(massage);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.isOperational = true;
    }
}

module.exports = ApiError;