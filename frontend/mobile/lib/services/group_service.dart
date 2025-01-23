import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/group.dart';
import '../core/utils/api_endpoints.dart';

class GroupService {
  static Future<List<Group>> getGroups() async {
    final response = await http.get(Uri.parse(ApiEndpoints.groups));

    if (response.statusCode == 200) {
      List<dynamic> body = json.decode(response.body);
      return body.map((dynamic item) => Group.fromJson(item)).toList();
    } else {
      throw Exception('Failed to load groups');
    }
  }
}
