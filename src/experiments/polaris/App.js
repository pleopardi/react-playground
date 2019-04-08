import React, { Component } from "react";
import {
  AppProvider,
  Button,
  Caption,
  Layout,
  List,
  Page
} from "@shopify/polaris";
import FileUpload from "./FileUpload";
import ProductsList from "./ProductsList";
import "@shopify/polaris/styles.css";

const products = [
  { value: "byward_market", label: "Byward Market" },
  { value: "centretown", label: "Centretown" },
  { value: "hintonburg", label: "Hintonburg" },
  { value: "westboro", label: "Westboro" },
  { value: "downtown", label: "Downtown" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      selectedProduct: products[0].value
    };

    this.handleSelectFile = this.handleSelectFile.bind(this);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
  }

  handleClickStart() {
    console.log("Click");
  }

  handleSelectFile([selectedFile]) {
    this.setState(() => ({ selectedFile }));
  }

  handleSelectProduct([selectedProduct]) {
    this.setState(() => ({ selectedProduct }));
  }

  render() {
    const { selectedFile, selectedProduct } = this.state;

    return (
      <AppProvider>
        <Page title="Polaris">
          <Layout>
            <Layout.AnnotatedSection
              title="Products"
              description="Select one product"
            >
              <ProductsList
                handleSelectProduct={this.handleSelectProduct}
                products={products}
                selectedProduct={selectedProduct}
              />
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              description="Upload a .csv file"
              title="File Upload"
            >
              <FileUpload
                handleSelectFile={this.handleSelectFile}
                selectedFile={selectedFile}
              />
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              description="Start the processing"
              title="Start"
            >
              <Button onClick={this.handleClickStart}>Start</Button>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              description="Processing results"
              title="Results"
            >
              <List>
                {Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`)
                  .reverse()
                  .map(item => {
                    return (
                      <List.Item key={item}>
                        <Caption>{item}</Caption>
                      </List.Item>
                    );
                  })}
              </List>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
