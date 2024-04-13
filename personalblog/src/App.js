import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Remove 'Link' from the import statement
import Navbar from "./Navbar";
import BlogSection from "./BlogSection";
import "./App.css";

const Home = () => <h1>Welcome to Home</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    image:
      "https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=1024x1024&w=is&k=20&c=dRCBw_smBuyXus7iwgKUS3V02KqJpqildutyFVjZbaY=",
    description:
      "Exercise is known to have a positive impact on mental health. Going to the gym releases endorphins, the body's natural mood elevators, which can help reduce feelings of stress, anxiety, and depression. It also promotes better sleep, increases self-esteem, and improves cognitive function.",
  },
  {
    id: 2,
    title: "Blog 2",
    image:
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "This is the fluid inside the body's cells. It accounts for about two-thirds of the body's total water content. Intracellular fluid is essential for maintaining cell structure, facilitating chemical reactions, and transporting nutrients and waste products within cells.",
  },
  {
    id: 3,
    title: "Blog 3",
    image:
      "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      " Earth has a diverse range of physical features, including continents, oceans, mountains, deserts, and forests. It has a diameter of approximately 12,742 kilometers (7,918 miles) and a mass of about 5.97 × 10^24 kilograms.",
  },
  {
    id: 4,
    title: "Blog 4",
    image:
      "https://media.istockphoto.com/id/1364253107/photo/dog-and-cat-as-best-friends-looking-out-the-window-together.jpg?s=1024x1024&w=is&k=20&c=aaX7bkXdt-2liXXMuREbAleqAPWM3YzZzf_g_1pBSLQ=",
    description:
      " Cats are relatively low-maintenance pets compared to dogs. They are fastidious groomers and typically keep themselves clean. They also tend to use a litter box for their bathroom needs, making them suitable for indoor living",
  },
  {
    id: 5,
    title: "Blog 5",
    image:
      "https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.jpg?s=1024x1024&w=is&k=20&c=9Ia8cojAjkfVgft22bC_pt5NDko-_pWIu4JOYsjnAuY=",
    description:
      "Modern cars are equipped with various features designed to enhance comfort and safety for occupants. These may include comfortable seating, climate control systems, advanced airbag systems, anti-lock braking systems (ABS), traction control, electronic stability control (ESC), and collision avoidance technologies.",
  },
  {
    id: 6,
    title: "Blog 6",
    image:
      "https://media.istockphoto.com/id/874115126/photo/vintage-motorbike.jpg?s=1024x1024&w=is&k=20&c=2NUTcjNIYLLuyz-J-GHmHJ28lGLBp1mUgyLlflg8xbE=",
    description:
      "Motorcycles can offer high performance and acceleration, providing an exhilarating riding experience for enthusiasts. Sport bikes, in particular, are designed for speed and agility, with powerful engines and responsive handling characteristics.",
  },
  {
    id: 7,
    title: "Blog 7",
    image:
      "https://media.istockphoto.com/id/1224152825/photo/close-up-of-rental-bicycles-on-rental-station-on-the-street.jpg?s=1024x1024&w=is&k=20&c=qBwICV5BA4dI26QQ7FJaEmXks697oO-U5NrjfDg1CXo=",
    description:
      " Cycling is an excellent form of exercise that offers a low-impact cardiovascular workout. It helps strengthen the heart, lungs, and muscles, improves stamina and endurance, and promotes overall physical fitness. Regular cycling can also aid in weight management and reduce the risk of chronic diseases such as heart disease, diabetes, and obesity.",
  },
  {
    id: 8,
    title: "Blog 8",
    image:
      "https://media.istockphoto.com/id/673276570/photo/studio-headphone-lying-on-keyboard-synthesizer-studio.jpg?s=1024x1024&w=is&k=20&c=LFg1uZVEivuGwRqlwfvyQdCkq99-D3q31ZhipB_vkyE=",
    description:
      "Music has the power to evoke a wide range of emotions, from joy and excitement to sadness and nostalgia. Certain melodies, harmonies, and rhythms can resonate deeply with listeners, eliciting strong emotional responses and providing comfort or catharsis.",
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog">
            <BlogSection blogs={blogs} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
