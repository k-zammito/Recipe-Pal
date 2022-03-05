import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 30x;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
  width: 225px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 3px 5px 0 #000000;
`;

export const CoverImage = styled.img`
  height: 150px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.button`
  font-size: 18px;
  border: solid 1px #6aa238;
  background-color: white;
  color: black;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 7px;
  color: #6aa238;
  text-align: center;
  width: 200px;
`;

export const ViewRecipeText = styled(IngredientsText)`
  border: solid 1px #ce9773;
  color: #ce9773;
`;
