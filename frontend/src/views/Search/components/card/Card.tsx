import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../../app/store"
import FlexBox from "../../../../components/containers/flexbox/FlexBox"
import getAxios from "../../../../helpers/wrappedAxios"
import { setLocation } from "../../../../slices/locationSlice"
import CardIcon from "./CardIcon"

const axios = getAxios()

const Card = ({ index }: any) => {
  const [open, setOpen] = useState<boolean>(false)

  const _data = useSelector((state: RootState) => state.pagedata.data)
  const data = _data[index]

  const dispatch = useDispatch()
  const handleClick = () => {
    setOpen(!open)

    if (!open) {
      dispatch(setLocation(data.result.geometry.location))
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return !data ? (
    <div className="h-[340px] shadow-md rounded-md">
      <div className="h-[180px] bg-gray-400 animate-pulse" />
    </div>
  ) : (
    <div
      onClick={handleClick}
      className="cursor-pointer pb-4 border-[1px] shadow-md rounded-md overflow-hidden"
    >
      <img
        className="w-full h-[180px]"
        src={
          data
            ? "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
              data.result.photos[0].photo_reference +
              "&key=AIzaSyCg6O22nD-Tpam6DP4aZG-Y7a51xDGvMQg"
            : "/assets/welcome.png"
        }
        draggable={false}
        loading="lazy"
        alt="Temp"
      />
      <div className="px-3">
        <FlexBox addClass="items-center gap-2 min-h-[10vw] lg:min-h-[5vw]">
          <h2 className="py-3 font-bold text-lg">{data.result.name}</h2>
          {data.verified && (
            <img
              src="/assets/card/verify_badge.webp"
              width="20"
              className="w-[20px] h-[20px]"
            ></img>
          )}
        </FlexBox>
        <FlexBox addClass="text-xs py-1 items-center gap-1">
          <CardIcon type="location" />
          {data.result.formatted_address}
        </FlexBox>
        <FlexBox addClass="text-xs py-1 items-center gap-1">
          <CardIcon type="globe" />
          <a href={data.result.website}>{data.result.website}</a>
        </FlexBox>
        {/* Dropdowned */}
        {open && (
          <div>
            <FlexBox addClass="py-1">
              <CardIcon type="phone" />
              {data.result.international_phone_number}
            </FlexBox>

            <FlexBox addClass="py-1 items-start">
              <CardIcon type="email" />
              <span className="card-email">{data.result.email}</span>
            </FlexBox>

            <FlexBox addClass="justify-between py-1 px-4">
              <FlexBox addClass="gap-3">
                {data.links.youtube ? (
                  <a href={data.links.youtube} target="_blank">
                    <CardIcon type="socials/youtube" />
                  </a>
                ) : (
                  <></>
                )}
                {data.links.twitter ? (
                  <a href={data.links.twitter} target="_blank">
                    <CardIcon type="socials/twitter" />
                  </a>
                ) : (
                  <></>
                )}
                {data.links.facebook ? (
                  <a href={data.links.facebook} target="_blank">
                    <CardIcon type="socials/facebook" />
                  </a>
                ) : (
                  <></>
                )}
              </FlexBox>
              <a href={data.links.goto} target="_blank">
                <CardIcon type="goTo" />
              </a>
            </FlexBox>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
