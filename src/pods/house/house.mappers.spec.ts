import { ObjectId } from "mongodb";
import * as model from "dals/index";
import * as apiModel from "./house.api-model";
import { mapHouseListFromApiToModel, mapReviewListFromApiToModel } from './house.mappers';

  describe('house mappers spec', () => {
    describe('mapHouseListFromApiToModel', () =>{
      it.each<apiModel.House[]>([undefined, null, []])("should return empty array when it feeds houselist equals %p", (houseList: any) => {
        //Arrange
        //Act
          const result = mapHouseListFromApiToModel(houseList);
        //Assert
        expect(result).toEqual([]);
      });

      it("should return one mapped item in array when it feeds houseList with one item", () => {
        //Arrange
          const houseList: apiModel.House[] = [{
            id: "66029f01d3fa5fc617895db8",
            listing_url: "https://www.airbnb.com/rooms/10006546",
            name: "Ribeira Charming Duplex",
            description: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
            bedrooms: 3,
            beds: 5,
            bathrooms: 1,
            price: 80,
            address: [
                {
                    street: "Porto, Porto, Portugal",
                    suburb: "",
                    government_area: "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
                    market: "Porto",
                    country: "Portugal",
                    country_code: "PT",
                    location: [
                        {
                            type: "Point",
                            coordinates: [
                                -8.61308,
                                41.1413
                            ],
                            is_location_exact: false
                        }
                    ]
                }
            ],
            reviews: []
          }];
        //Act
          const result = mapHouseListFromApiToModel(houseList);
        //Assert
        const expectedResult: model.House[] = [{
          _id: new ObjectId("66029f01d3fa5fc617895db8"),
          listing_url: "https://www.airbnb.com/rooms/10006546",
          name: "Ribeira Charming Duplex",
          description: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
          bedrooms: 3,
          beds: 5,
          bathrooms: 1,
          price: 80,
          address: [
              {
                  street: "Porto, Porto, Portugal",
                  suburb: "",
                  government_area: "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
                  market: "Porto",
                  country: "Portugal",
                  country_code: "PT",
                  location: [
                      {
                          type: "Point",
                          coordinates: [
                              -8.61308,
                              41.1413
                          ],
                          is_location_exact: false
                      }
                  ]
              }
          ],
          reviews: []  
        }]
        expect(result).toEqual(expectedResult);
      });
    });
  });
  