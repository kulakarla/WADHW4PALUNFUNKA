import { createStore } from 'vuex'


export default createStore({
    strict: true,

    state: {
        postList:[
            {id: 1, profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                img: "https://s.err.ee/photo/crop/2019/10/14/697168h9a9dt46.jpg",
                date: "Aug 29, 2022",
                paragraph: "Tartu 2024"},
            {id: 2, profilepic: "https://www.srikiran.org/wp-content/uploads/2021/07/new_Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png",
                img: "",
                date: "July 22, 2022",
                paragraph: "Mul kõigest siiber."},
            {id: 3, profilepic: "https://media.vanityfair.com/photos/5d2750b1abb5c9000873bced/1:1/w_1165,h_1165,c_limit/lion-king-review.jpg",
                img: "https://www.travelandleisure.com/thmb/OuatVdUX6tFP1yuzPJr4BeRzEPE=/1600x1200/smart/filters:no_upscale()/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b.jpg",
                date: "July 20, 2022",
                paragraph: "Keenia kütusehinnad on võrredles Eestiga ikka paradiiis. Liiter disla on max 40 senti. Tasmaania tiiger."},
            {id: 4, profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                img: "https://as2.ftcdn.net/v2/jpg/01/40/87/71/1000_F_140877194_Ns1yqiZNk64k8yELu6zXtx9SmRgslkey.jpg",
                date: "June 29, 2022",
                paragraph: "Äärmiselt ilus jaanilõke"},
            {id: 5, profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                img: "",
                date: "June 24, 2022",
                paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
            {id: 6, profilepic: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
                img: "",
                date: "June 20, 2022",
                paragraph: "Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (listen) bə-RAHK hoo-SAYN oh-BAH-mə;[1] born August 4, 1961) is an American politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African-American president of the United States.[2] Obama previously served as a U.S. senator from Illinois from 2005 to 2008 and as an Illinois state senator from 1997 to 2004. "},
            {id: 7, profilepic: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/27014.png",
                img: "https://i.ytimg.com/vi/m3HZKHTLHDU/sddefault.jpg",
                date: "June 14, 2022",
                paragraph: "hahahahahahahaahaha"},
            {id: 8, profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Leachate_Pond.JPG",
                date: "May 30, 2022",
                paragraph: "Prügilanõrgvesi ehk nõrgvesi on igasugune ladestatud jäätmetest läbi nõrguv vedelik, mis jääb prügilasse või voolab prügilast välja[1]."},
            {id: 9, profilepic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Pirate_Bay_logo.svg/1200px-The_Pirate_Bay_logo.svg.png",
                img: "",
                date: "May 26, 2022",
                paragraph: "Site's back up boys - Yours Truly"},
            {id: 10, profilepic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                img: "",
                date: "May 27, 2022",
                paragraph: "Grossi pood >>>> A&O"
            }

        ]
    },
    getters: {
        postListStuff: state => {
            var postListStuff = state.postList.map(post => {
                return {
                    id: post.id,
                    img: post.img,
                    profilepic: post.profilepic,
                    date: post.date,
                    paragraph: post.paragraph
                }
            });
            return postListStuff
        },
    },

    mutations: {
    },
    actions: {
    }
})
