export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const LitterPartsFragmentDoc = gql`
    fragment LitterParts on Litter {
  __typename
  active
  featured
  sortOrder
  title
  slug
  breeder
  generation
  priceRange
  litterTitle
  dateOfBirth
  takeHomeDate
  estimatedSize
  grooming
  temperament
  deposit
  contact
  damName
  damDesc
  damPhoto
  sireName
  sireDesc
  cardDesc
  cardPhoto
  sirePhoto
  puppies {
    __typename
    name
    gender
    price
    status
    photos {
      __typename
      src
      alt
    }
  }
  showCarousel
  showPrevCarousel
  previousPuppies {
    __typename
    src
    alt
  }
}
    `;
export const UpcomingLitterPartsFragmentDoc = gql`
    fragment UpcomingLitterParts on UpcomingLitter {
  __typename
  active
  sortOrder
  breed
  slug
  breeder
  expectedDate
  estimatedSize
  cardDesc
  description
  cardPhoto
  damName
  damDesc
  damPhoto
  sireName
  sireDesc
  sirePhoto
  previousPuppies {
    __typename
    src
    alt
  }
}
    `;
export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  heroHeading
  heroSubtext
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  announcementBar
  phone
  email
  instagramUrl
  cashappUrl
}
    `;
export const ReviewsPartsFragmentDoc = gql`
    fragment ReviewsParts on Reviews {
  __typename
  reviewImages {
    __typename
    src
    alt
  }
}
    `;
export const LitterDocument = gql`
    query litter($relativePath: String!) {
  litter(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...LitterParts
  }
}
    ${LitterPartsFragmentDoc}`;
export const LitterConnectionDocument = gql`
    query litterConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LitterFilter) {
  litterConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...LitterParts
      }
    }
  }
}
    ${LitterPartsFragmentDoc}`;
export const UpcomingLitterDocument = gql`
    query upcomingLitter($relativePath: String!) {
  upcomingLitter(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UpcomingLitterParts
  }
}
    ${UpcomingLitterPartsFragmentDoc}`;
export const UpcomingLitterConnectionDocument = gql`
    query upcomingLitterConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UpcomingLitterFilter) {
  upcomingLitterConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UpcomingLitterParts
      }
    }
  }
}
    ${UpcomingLitterPartsFragmentDoc}`;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export const ReviewsDocument = gql`
    query reviews($relativePath: String!) {
  reviews(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ReviewsParts
  }
}
    ${ReviewsPartsFragmentDoc}`;
export const ReviewsConnectionDocument = gql`
    query reviewsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ReviewsFilter) {
  reviewsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ReviewsParts
      }
    }
  }
}
    ${ReviewsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    litter(variables, options) {
      return requester(LitterDocument, variables, options);
    },
    litterConnection(variables, options) {
      return requester(LitterConnectionDocument, variables, options);
    },
    upcomingLitter(variables, options) {
      return requester(UpcomingLitterDocument, variables, options);
    },
    upcomingLitterConnection(variables, options) {
      return requester(UpcomingLitterConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    },
    reviews(variables, options) {
      return requester(ReviewsDocument, variables, options);
    },
    reviewsConnection(variables, options) {
      return requester(ReviewsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/dffd7077-227c-4847-92af-8032f3e0f98b/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
