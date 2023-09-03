import { House } from "./house";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      id: "1",
      title: "Novick",
      image: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
      room_number: 3,
      bed_number: 3,
      bath_number: 1,
    },
    {
      id: "2",
      title: "NovickII",
      image: "http://dummyimage.com/140x100.png/cc0000/ffffff",
      description:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
      room_number: 4,
      bed_number: 3,
      bath_number: 2,
    },
    {
      id: "3",
      title: "Nancy",
      image: "http://dummyimage.com/117x100.png/ff4444/ffffff",
      description: "Nullam porttitor lacus at turpis.",
      room_number: 2,
      bed_number: 2,
      bath_number: 1,
    },
    {
      id: "4",
      title: "Marcy",
      image: "http://dummyimage.com/236x100.png/cc0000/ffffff",
      description:
        "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
      room_number: 3,
      bed_number: 3,
      bath_number: 1,
    },
    {
      id: "5",
      title: "Surrey",
      image: "http://dummyimage.com/139x100.png/cc0000/ffffff",
      description:
        "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
      room_number: 1,
      bed_number: 1,
      bath_number: 1,
    },
    {
      id: "6",
      title: "Carioca",
      image: "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
      room_number: 3,
      bed_number: 3,
      bath_number: 2,
    },
    {
      id: "7",
      title: "Clyde Gallagher",
      image: "http://dummyimage.com/169x100.png/dddddd/000000",
      description:
        "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
      room_number: 5,
      bed_number: 3,
      bath_number: 2,
    },
    {
      id: "8",
      title: "Jay",
      image: "http://dummyimage.com/152x100.png/cc0000/ffffff",
      description:
        "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      room_number: 2,
      bed_number: 2,
      bath_number: 1,
    },
    {
      id: "9",
      title: "Mayfield",
      image: "http://dummyimage.com/169x100.png/cc0000/ffffff",
      description:
        "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
      room_number: 3,
      bed_number: 3,
      bath_number: 1,
    },
    {
      id: "10",
      title: "Rieder",
      image: "http://dummyimage.com/238x100.png/cc0000/ffffff",
      description:
        "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
      room_number: 1,
      bed_number: 1,
      bath_number: 1,
    },
  ],
};
