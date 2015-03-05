package com.yakub.extspring.api.util;


import java.util.List;

public interface QueryGenerator {

	String generateInsertQuery();
	String generateUpdateQuery();
	String generateDeleteQuery();
	String generateSelectAllQuery();
	String generateCountQuery();
	String generateCountByQuery(List<String> byParams);
	String generateUpdateByQuery(List<String> byParams);
	String generateDeleteByQuery(List<String> byParams);
	String generateSelectByQuery(List<String> byParams);
	String generateSelectFieldByQuery(List<String> fields);
	String generateSelectFieldByQuery(List<String> fields,List<String> byParams);
	
}
