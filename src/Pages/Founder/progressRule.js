const companyFields = [
  "country",
  "state",
  "city",
  "pincode",
  "company_address",
  "website_url",
  "facebook_link",
  "instagram_link",
  "company_linked_in_profile",
  "legal_name",
  "cin",
  "date_of_incorporation",
  "incorporation_type",
  "invested_so_far",
  "sector",
  "number_of_employees",
];
export const getCompanyProfileProgress = (data) => {
  let progress = 0;
  companyFields.map((i) => {
    if (data?.[i]) {
      progress += 6.25;
    }
  });

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};

export const getPitchProgress = (data) => {
  let progress = 0;
  if (data) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};

export const getFAQProgress = (data) => {
  let progress = 0;
  if (data?.length < 3) {
    progress = data?.length * 33;
  }

  if (data?.length > 2) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};
export const getHighLightsProgress = (data) => {
  let progress = 0;
  if (data?.length <= 3) {
    progress = data?.length * 25;
  }

  if (data?.length > 3) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};
export const getPromotionProgress = (data) => {
  let progress = 0;
  if (data) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};
export const getPressProgress = (data) => {
  let progress = 0;
  if (data) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};
export const getUploadDocumentsProgress = (data) => {
  let progress = 0;
  if (data) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};

export const getPeopleProgress = (data) => {
  const teamData = data?.filter(
    (item) => item.type === "TEAM"
  );
  const investorData = data?.filter(
    (item) => item.type === "INVESTOR"
  );
  const advisorData = data?.filter(
    (item) => item.type === "ADVISOR"
  );
  let progress = 0;
  if (teamData?.length >= 1) {
    progress += 33;
  }
  if (investorData?.length >= 1) {
    progress += 33;
  }
  if (advisorData?.length >=1 ) {
    progress += 33;
  }
  
  if (teamData?.length >= 1 && investorData?.length >= 1 && advisorData?.length >= 1) {
    progress = 100;
  }

  return progress === 100
    ? { status: "Completed", progress: progress }
    : { status: "Pending", progress: progress };
};
