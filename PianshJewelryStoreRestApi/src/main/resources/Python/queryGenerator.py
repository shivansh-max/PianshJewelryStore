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

for i in query:
    print(f'@Query(value = \" select * from jewelry  where {i} like :what\", nativeQuery = true)')
    print(f'ArrayList < Jewelry > {i}( @Param(value=\"what\") String what );')