module.exports=(err, req, res, next) =>
{
    err.statusCode=err.statusCode || 500;
    err.status =err.status || "error";
    
    if(process.env.NODE_ENV==='development')
        console.log(err);

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
}
