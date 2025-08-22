import shortid from "shortid";
import { shortUrl } from "../models/shortUrlModel.js";

async function createNewUrlHandler(req, res) {
  try {
    const redirecturl = req.body.url;
    if (!redirecturl) {
      res.status(400).json({
        status: "Failed",
        des: "Url not found",
      });
    }
    const shortId = shortid(8);
    const response = await shortUrl.create({
      shortId: shortId,
      redirectUrl: req.body?.url,
      visitHistory: [],
    });
    if (!response) {
      res.status(400).json({
        status: "Failed",
        des: "Url not found",
      });
    }
    res.status(201).json({
      status: "success",
      id: response._id,
      shortUrl: response.shortId,
      redirectUrl: response.redirectUrl,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(422).json({
        status: "failed",
        des: "Validation error",
      });
    }

    res.status(500).json({
      status: "failed",
      des: "Internal Server Error",
    });
  }
}
async function getUrlHandler(req, res) {
  try {
    const shortId = req.params?.shortId;

    if (!shortId) {
      return res.status(400).json({
        status: "failed",
        des: "Short Url not found in the request parameters",
      });
    }

    const response = await shortUrl.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamps: Date.now(),
          },
        },
      }
    );

    if (!response) {
      return res.status(404).json({
        status: "failed",
        des: "Short Url not found",
      });
    }

    res.redirect(response.redirectUrl);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(422).json({
        status: "failed",
        des: "Validation error",
      });
    }

    res.status(500).json({
      status: "failed",
      des: "Internal Server Error",
    });
  }
}
async function getUrlHistoryHandler(req, res) {
  try {
    const shortId = req.params?.shortId;

    if (!shortId) {
      return res.status(401).json({
        status: "failed",
        des: "Short Id not found",
      });
    }
    const response = await shortUrl.findOne({ shortId });

    if (!response) {
      return res.status(401).json({
        status: "failed",
        des: "Short Url not found",
      });
    }
    res.status(201).json({
      totalClicks: response?.visitHistory.length,
      visitHistory: response?.visitHistory,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(422).json({
        status: "failed",
        des: "Validation error",
      });
    }

    res.status(500).json({
      status: "failed",
      des: "Internal Server Error",
    });
  }
}

async function getDataHandler(req, res) {
  return res.status(200).json({
    name: "clientData",
    timestamp: 1,
    data: {
      partnerList: {
        smt: {
          domain: [
            "v2.travelx.ai",
            "alpha-v2.travelx.ai",
            "beta-v2.travelx.ai",
            "dev-v2.travelx.ai",
            "stage-v2.travelx.ai",
          ],
          test: "saurabh",
          theme: "travelx",
          clientName: "travelx",
          appName: "TravelX VIP",
          clientFullName: "Travelx",
          key: "palsgcvgscvvs",
          pid: "smt",
          clientCode: "default-smt",
          appLogo: {
            whiteLogo: "https://img.travelx.ai/partner/travelxWhite.png",
            blackLogo: "https://img.travelx.ai/partner/travelxBlack.png",
          },
          favicon: "https://img.travelx.ai/cstx_images/favicon/travelx.png",
          clientList: [
            {
              theme: "travelx",
              clientName: "ebix",
              appName: "Ebix",
              clientFullName: "Ebix",
              key: "palsgcvgscvvs",
              pid: "smt",
              clientCode: "ebix",
              appLogo: {
                whiteLogo: "https://img.travelx.ai/partner/ebixWhite.png",
                blackLogo: "https://img.travelx.ai/partner/ebixBlack.png",
              },
              favicon: "https://img.travelx.ai/cstx_images/favicon/ebix.png",
            },
            {
              theme: "travelx",
              clientName: "test",
              appName: "Test",
              clientFullName: "Test",
              key: "palsgcvgscvvs",
              pid: "smt",
              clientCode: "test",
              appLogo: {
                whiteLogo: "https://img.travelx.ai/partner/ebixWhite.png",
                blackLogo: "https://img.travelx.ai/partner/ebixBlack.png",
              },
              favicon: "https://img.travelx.ai/cstx_images/favicon/ebix.png",
            },
          ],
          accessList: [],
          defaultRoute: "home",
        },
        theentertainer: {
          domain: [
            "entertainer.travelx.ai",
            "alpha-entertainer.travelx.ai",
            "beta-entertainer.travelx.ai",
            "dev-entertainer.travelx.ai",
            "stage-entertainer.travelx.ai",
          ],
          theme: "theentertainer",
          clientName: "theentertainer",
          appName: "the ENTERTAINER",
          clientFullName: "The Entertainer",
          key: "hdbchdgvdffdh",
          pid: "ent",
          clientCode: "theentertainer",
          appLogo: {
            whiteLogo: "https://img.travelx.ai/partner/theentertainerWhite.png",
            blackLogo: "https://img.travelx.ai/partner/theentertainerBlack.png",
          },
          favicon:
            "https://img.travelx.ai/cstx_images/favicon/theentertainer.png",
          clientList: [],
          accessList: [],
          defaultRoute: "home",
        },
        homie: {
          domain: [
            "homie.travelx.ai",
            "homie-dev.travelx.ai",
            "alpha-homie.travelx.ai",
            "beta-homie.travelx.ai",
            "dev-homie.travelx.ai",
            "stage-homie.travelx.ai",
          ],
          theme: "homie",
          clientName: "homie",
          appName: "Homie",
          clientFullName: "Homie",
          key: "plfkvnfjbgjnv",
          pid: "hom",
          clientCode: "hom",
          appLogo: {
            whiteLogo: "https://img.travelx.ai/partner/homieWhite.png",
            blackLogo: "https://img.travelx.ai/partner/homieBlack.png ",
          },
          favicon: "https://img.travelx.ai/cstx_images/favicon/homie.png",
          clientList: [],
          accessList: [
            "error",
            "customer-support",
            "upgrade-subscription",
            "booking-complete",
            "back-clicked",
            "hotel/search",
            "hotel/search-results",
            "hotel/details/:hotelId",
            "hotel/booking-review/:bookingId",
            "hotel/booking-confirmed/:bookingReferenceId",
            "hotel/booking-details/:bookingReferenceId",
            "membership/:id",
          ],
          defaultRoute: "membership/hotel_book",
        },
      },
    },
  });
}

export {
  createNewUrlHandler,
  getUrlHandler,
  getUrlHistoryHandler,
  getDataHandler,
};
