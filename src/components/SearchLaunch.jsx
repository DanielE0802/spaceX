import { Input } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

function SearchLaunch(props) {
  const valueSearch = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <Container mt="5" mb="10">
      <Input
        onChange={valueSearch}
        value={props.search}
        type="search"
        id="search"
        placeholder="Search mission name"
        variant="filled"
      />
    </Container>
  );
}

export default SearchLaunch;
