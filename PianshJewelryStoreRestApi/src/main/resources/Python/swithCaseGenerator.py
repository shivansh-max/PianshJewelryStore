query = ["brand",
         "purchasedfrom",
         "nameofitem",
         "cost",
         "orderid",
         "datapuchesed",
         "weight",
         "conditionofitem",
         "metal", "stone",
         "quantity",
         "soldin",
         "salesprice",
         "pandoraid"]

print("switch (where) {")
for i in query:
    print(f"    case \"{i}\":")
    print(f"        return searchRepo.{i}(what);")

print("}")