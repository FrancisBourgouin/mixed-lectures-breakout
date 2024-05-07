const selectAuthorById = (params) => {
  const { authorId, authorRating, authorAge } = params;

  const queryParams = [];

  const queryStr = `
      SELECT * 
      FROM authors
    `;



  if (authorId) {
    queryParams.push(authorId);
    queryStr += sqlConditionParser("authors.id = $", queryParams)
  }

  queryStr += sqlConditionParserButBetter(authorRating, "authors.rating > $", queryParams)
  queryStr += sqlConditionParserButBetter(authorRating, "authors.rating > $", queryParams)
  queryStr += sqlConditionParserButBetter(authorRating, "authors.rating > $", queryParams)
  queryStr += sqlConditionParserButBetter(authorRating, "authors.rating > $", queryParams)



  if (authorAge) {
    queryParams.push(authorAge);
    queryStr += queryParams.length === 1 ? " WHERE " : " AND ";
    queryStr += `authors.age < $${queryParams.length}`;
  }

  console.log(queryParams);

  return client.query(queryStr, queryParams).then((res) => res.rows[0]);
};


const sqlConditionParser = (condition, queryParams) => {
  let output = " "
  output += queryParams.length === 1 ? "WHERE " : "AND ";
  output += condition
  output += queryParams.length

  return output
}


const sqlConditionParserButBetter = (value, condition, queryParams) => {
  if(!value){
    return ""
  }

  queryParams.push(value);

  let output = " "
  output += queryParams.length === 1 ? "WHERE " : "AND ";
  output += condition
  output += queryParams.length


  return output
}