import React, { useState } from "react";
import { Container } from "./styles";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { addCarItem } from "../../store/modules/car/actions";

import Header1 from "../../components/Header1";

function HomePage() {
  const dispatch = useDispatch();
  const [carItems, setCarItems] = useState<number>(0);

  const { loadingSignInRequest, username } = useSelector((state: StoreState) =>
    state.auth
  );
  const { carElements } = useSelector((state: StoreState) => state.car);

  const items = [
    {
      id: 99,
      name: "NIKE SB ZOOM JANOSKI RM SHOES (SAIL YUKON BROWN)",
      category: "Skate Shoes",
      price: 80.99,
      availableSizes: [38, 39, 40, 41, 42],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/SkCpzlZCEsi2F7_peTO0Qxde8fk=/fit-in/412x480/filters:fill(white):brightness(-4)/product/136582-0-NikeSB-ZoomJanoskiRM.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/Ji1y44CGtiJYYfPw0UY7Hv3arXE=/fit-in/412x480/filters:fill(white):brightness(-4)/product/136582-1-NikeSB-ZoomJanoskiRM.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/hvS-fGJvLTv3JEQB5Zwjs7B-hfo=/fit-in/412x480/filters:fill(white):brightness(-4)/product/136582-2-NikeSB-ZoomJanoskiRM.jpg",
        },
      ],
    },
    {
      id: 100,
      name: "NIKE SB ZOOM JANOSKI CANVAS RM SHOES (UNIVERSITY RED CLUB GOLD)",
      category: "Lifestyle",
      price: 84.99,
      availableSizes: [38, 40, 41, 44],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/LG5jE8FQ0lrTZeZsjW0yYV6SD3U=/fit-in/412x480/filters:fill(white):brightness(-4)/product/133119-0-NikeSB-ZoomJanoskiCanvasRM.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/7zi4ts6k-J5Nkcy9olLzv7LeW5c=/fit-in/412x480/filters:fill(white):brightness(-4)/product/133119-1-NikeSB-ZoomJanoskiCanvasRM.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/7zi4ts6k-J5Nkcy9olLzv7LeW5c=/fit-in/412x480/filters:fill(white):brightness(-4)/product/133119-1-NikeSB-ZoomJanoskiCanvasRM.jpg",
        },
      ],
    },
    {
      id: 101,
      name: "NIKE SB ZOOM JANOSKI SLIP RM SHOES (BLACK WHITE)",
      category: "Street",
      price: 70.99,
      availableSizes: [40.5],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/tg4od1pueCuIxPAlimXP6ZlIZSI=/fit-in/412x480/filters:fill(white):brightness(-4)/product/124011-0-NikeSB-ZoomJanoskiSlipRM.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/7HXKwHtldr9EDayapYPHaRf53m8=/fit-in/412x480/filters:fill(white):brightness(-4)/product/124011-1-NikeSB-ZoomJanoskiSlipRM.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/gxCM9RgRlHMixOjJSHNoZXwOY5c=/fit-in/412x480/filters:fill(white):brightness(-4)/product/124011-2-NikeSB-ZoomJanoskiSlipRM.jpg",
        },
      ],
    },
    {
      id: 102,
      name: "Air Jordan 1 Mid SE",
      category: "SNEAKERS",
      price: 129.99,
      availableSizes: [40, 41, 42],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/dLKv7V_MwFrRqVSoENEZh_g55D8=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126982-0-NikeSB-ZoomJanoskiSlipPremiumRM.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/-7Ze4FiBz9Egl2yiYpnWbAW-KP8=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126982-1-NikeSB-ZoomJanoskiSlipPremiumRM.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/-ssbfWE15-I0iZZJNSkZ1Spe22w=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126982-2-NikeSB-ZoomJanoskiSlipPremiumRM.jpg",
        },
      ],
    },
    {
      id: 103,
      name: "NIKE SB AIR MAX JANOSKI 2 SHOES",
      category: "Lifestyle",
      price: 79.99,
      availableSizes: [40.5],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/W09cNRKwVm4Ebv_zYQ_wLKsAnyI=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126956-0-NikeSB-AirMaxJanoski2.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/LyRoNi8X-k30oFKcD8QJdc58yj4=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126956-1-NikeSB-AirMaxJanoski2.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/x5ahT0rmfyCoJYGyf8sqB0qEhCQ=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126956-2-NikeSB-AirMaxJanoski2.jpg",
        },
      ],
    },
    {
      id: 104,
      name: "NIKE SB ZOOM JANOSKI SLIP RM SHOES (BLACK WHITE)",
      category: "Street",
      price: 70.99,
      availableSizes: [40.5],
      images: [
        {
          id: 1,
          url:
            "https://cdn.skatedeluxe.com/thumb/UVyGHqVGmZjjUaEBDhoUuKo6pGs=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126969-0-NikeSB-JanoskiMidRM.jpg",
        },
        {
          id: 2,
          url:
            "https://cdn.skatedeluxe.com/thumb/9yXwzV6LfhnmBIwiyOzsb2IpKE8=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126969-1-NikeSB-JanoskiMidRM.jpg",
        },
        {
          id: 3,
          url:
            "https://cdn.skatedeluxe.com/thumb/MqR6HMPWtfvb3fXf5rcSV9V5t2A=/fit-in/412x480/filters:fill(white):brightness(-4)/product/126969-2-NikeSB-JanoskiMidRM.jpg",
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <ul className="items-grid">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                //handleSelectItem(item.id);
              }}
            >
              <ProductPreview
                item={item}
              />
            </li>
          ))}
        </ul>
      </Container>
      <h6>
        -------------------------------------------------------------------------------------------------------------------------------------
      </h6>
    </>
  );
}

export default HomePage;
