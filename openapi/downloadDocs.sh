#!/bin/bash

API_DOCS_URL="http://localhost:8080/docs/api-docs.yaml"
OUTPUT_DIR="./openapi"
OUTPUT_FILE="${OUTPUT_DIR}/api-docs.yaml"

rm -rf ../src/gen/endpoints/*
rm -rf ../src/gen/models/*

curl -o "$OUTPUT_FILE" "$API_DOCS_URL"

if [ $? -eq 0 ]; then
  echo "Download成功"
else
  echo "Download失敗"
fi